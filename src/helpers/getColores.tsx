import ImageColors from 'react-native-image-colors';
import { ImageColorsResult } from 'react-native-image-colors/lib/typescript/types';

export const getImageColors = async (uri: string) => {
    const result: ImageColorsResult = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;
    switch (result.platform) {
        case 'android':
            primary = result.dominant;
            secondary = result.average;
            break;
        case 'ios':
            primary = result.primary;
            secondary = result.secondary;
            break;
        default:
            throw new Error('Unexpected platform key');
    }

    return [primary, secondary];
};
