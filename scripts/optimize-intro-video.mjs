import { execSync } from 'child_process';
import fs from 'fs';
import sharp from 'sharp';

async function optimizeIntroVideo() {
  console.log('=== Optimizing Intro Video ===');
  const FFMPEG = '/home/taneesh/.local/bin/ffmpeg';

  // 1. MP4: H.264 main profile, yuv420p, 1280 wide max, no audio, faststart
  console.log('Encoding MP4...');
  execSync(`${FFMPEG} -y -i public/intro-video.mp4 -an -vf "scale='min(1280,iw)':-2" -c:v libx264 -profile:v main -pix_fmt yuv420p -crf 26 -movflags +faststart public/intro-video-temp.mp4`, { stdio: 'inherit' });
  fs.renameSync('public/intro-video-temp.mp4', 'public/intro-video.mp4');
  const mp4Stat = fs.statSync('public/intro-video.mp4');
  console.log(`MP4 size: ${(mp4Stat.size / 1024).toFixed(1)} KB`);

  // 2. WebM: VP9, 1280 wide max, no audio
  console.log('Encoding WebM...');
  execSync(`${FFMPEG} -y -i public/intro-video.mp4 -an -vf "scale='min(1280,iw)':-2" -c:v libvpx-vp9 -crf 34 -b:v 0 public/intro-video-temp.webm`, { stdio: 'inherit' });
  fs.renameSync('public/intro-video-temp.webm', 'public/intro-video.webm');
  const webmStat = fs.statSync('public/intro-video.webm');
  console.log(`WebM size: ${(webmStat.size / 1024).toFixed(1)} KB`);

  // 3. Extract final frame as poster image (under 20 KB)
  console.log('Extracting poster frame...');
  execSync(`${FFMPEG} -y -ss 00:00:03.850 -i public/intro-video.mp4 -vframes 1 -vf "scale='min(1280,iw)':-2" public/intro-poster-raw.png`, { stdio: 'inherit' });

  await sharp('public/intro-poster-raw.png')
    .webp({ quality: 80 })
    .toFile('public/intro-poster.webp');
  fs.unlinkSync('public/intro-poster-raw.png');

  const posterStat = fs.statSync('public/intro-poster.webp');
  console.log(`Poster size: ${(posterStat.size / 1024).toFixed(1)} KB (target < 20 KB: ${posterStat.size < 20 * 1024})`);
}

optimizeIntroVideo().catch(err => {
  console.error(err);
  process.exit(1);
});
