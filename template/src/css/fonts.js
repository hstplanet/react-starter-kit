import { useFonts } from 'expo-font';

export default {

    loadFonts() {
        let [load] = useFonts({
            'Lato-Italic': require('../assets/Lato,Montserrat_Alternates/Lato/Lato-Italic.ttf'),
            'Lato-Regular': require('../assets/Lato,Montserrat_Alternates/Lato/Lato-Regular.ttf'),
            'Lato-Bold': require('../assets/Lato,Montserrat_Alternates/Lato/Lato-Bold.ttf'),
        });

        return load;
    }

}