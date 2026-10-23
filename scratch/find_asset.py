import urllib.request
import re
import hashlib

req = urllib.request.Request('https://threeui.com/css/animated-top-dock/sable', headers={'User-Agent': 'Mozilla/5.0'})
expected = '4f4dc27f4a770c0d02fde800daa836c8adc0d1e423b28da74baaf0d1cc3ab96c'

try:
    with urllib.request.urlopen(req, timeout=5) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = set(re.findall(r'https?://[^\s"\'<>]+', html))
        for m in matches:
            if 'woff' in m or 'font' in m:
                print('Found font url:', m)
                try:
                    with urllib.request.urlopen(m, timeout=5) as aresp:
                        data = aresp.read()
                        h = hashlib.sha256(data).hexdigest()
                        print(m, len(data), h, 'MATCH!' if h == expected else '')
                except Exception as e:
                    print('Err:', m, e)
        
        # Check relative woff2 or assets in html
        for rel in set(re.findall(r'/[^\s"\'<>]+\.woff2', html)):
            print('Relative woff2:', rel)
            url = 'https://threeui.com' + rel
            try:
                with urllib.request.urlopen(url, timeout=5) as aresp:
                    data = aresp.read()
                    h = hashlib.sha256(data).hexdigest()
                    print(url, len(data), h, 'MATCH!' if h == expected else '')
            except Exception as e:
                print('Err relative:', e)

        # Check script bundles for font URLs
        scripts = re.findall(r'/_next/static/[^\s"\'<>]+\.js', html)
        for s in scripts:
            surl = 'https://threeui.com' + s
            try:
                with urllib.request.urlopen(surl, timeout=5) as sresp:
                    sjs = sresp.read().decode('utf-8', errors='ignore')
                    if 'fragment' in sjs.lower() or 'woff2' in sjs:
                        print('Found woff2 reference in script:', surl)
                        for fmatch in set(re.findall(r'[^\s"\'<>]+\.woff2', sjs)):
                            print('Font inside script:', fmatch)
            except:
                pass

except Exception as e:
    print('Page error:', e)
