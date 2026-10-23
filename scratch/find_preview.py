import urllib.request

base = 'https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/'
candidates = [
    'scene-images/a5dda15124c0c35496676daf/fragment-mono.woff2',
    'fonts/fragment-mono.woff2',
    'assets/fragment-mono.woff2',
    'fragment-mono.woff2',
    'src/shaders/fonts/fragment-mono.woff2',
    'scene-images/fragment-mono.woff2',
    'scene-images/a5dda15124c0c35496676daf/src/shaders/fonts/fragment-mono.woff2'
]

for c in candidates:
    u = base + c
    try:
        with urllib.request.urlopen(u, timeout=3) as resp:
            data = resp.read()
            print('SUCCESS:', u, len(data))
    except Exception as e:
        print('FAILED:', c, e)
