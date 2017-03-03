import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'soundcloudThumbnail'
})
export class SoundcloudThumbnailPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let imageUrl = value;
        if(typeof imageUrl === 'string') {
            imageUrl = imageUrl.replace('large.jpg','t500x500.jpg');
        }
        return imageUrl;
    }

}
