import { SoundcloudThumbnailPipe } from './soundcloud-thumbnail.pipe';

describe('SoundcloudThumbnailPipe', () => {
    it('create an instance', () => {
        const pipe = new SoundcloudThumbnailPipe();
        expect(pipe).toBeTruthy();
    });
});
