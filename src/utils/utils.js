import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImageResizer from "react-native-image-resizer";
import { Alert } from 'react-native';
import { PermissionsAndroid } from 'react-native';

const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Permissão para usar a Câmera',
                message: 'O app precisa de permissão para acessar a câmera',
                buttonPositive: 'OK',
            }
        );
    } catch (err) {
        console.warn(err);
    }
};

const convertUriToBase64 = async (uri, setImagem) => {
    const resizedImage = await ImageResizer.createResizedImage(
        uri,
        700,
        700,
        'JPEG',
        100
    );
    const imageUri = await fetch(resizedImage.uri);
    const imagemBlob = await imageUri.blob();
    console.log(imagemBlob);
    const reader = new FileReader();
    reader.onloadend = () => {
        setImagem(reader.result);
    };
    reader.readAsDataURL(imagemBlob);
}


const obterImagem = (setImagem) => {
    Alert.alert(
        'Escolha a origem da imagem',
        '',
        [
            {
                text: 'Galeria',
                onPress: () => {
                    launchImageLibrary({ mediaType: 'photo' }, (result) => {
                        if (result.assets && result.assets.length > 0) {
                            convertUriToBase64(result.assets[0].uri,setImagem);
                        } else {
                            console.log('Nenhuma imagem selecionada');
                        }
                    });
                },
            },
            {
                text: 'Câmera',
                onPress: () => {
                    requestCameraPermission();
                    launchCamera({ mediaType: 'photo' }, (result) => {
                        if (result.assets && result.assets.length > 0) {
                            convertUriToBase64(result.assets[0].uri,setImagem);
                        } else {
                            console.log('Nenhuma imagem tirada');
                        }
                    });
                },
            },
            {
                text: 'Cancelar',
                style: 'cancel',
            },
        ],
        { cancelable: true }
    );
};

export {
    obterImagem
};