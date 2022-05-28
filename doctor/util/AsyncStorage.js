import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (object) => {

    try {

        let string = JSON.stringify(object.data)
        await AsyncStorage.setItem(
            object.key,
            string
        );
        return true;
    } catch (error) {

        return false;
    }
};

export const removeStoreData = async (key) => {
    try {

        await AsyncStorage.removeItem(key);
        return true;
    } catch (error) {

        return false;
    }

};


export const getStorage = async (key) => {

    try {

        const value = await AsyncStorage.getItem(key);

        if (value !== null) {

            return JSON.parse(value)
        } else {

            return false;
        }
    } catch (error) {

        return false;
    }

};