import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from "react-i18next";
import { useLanguage } from '@/context/LanguageContext';

export default function TabTwoScreen() {
  const { currentLanguage, changeLanguage, getAvailableLanguages } = useLanguage();
  const {t}= useTranslation();
  return (
   <SafeAreaView>
    <View>
      <Text> {t('home.welcome')} </Text>
    </View>
    <View >
          {getAvailableLanguages().map((language) => (
            <TouchableOpacity
              key={language}
              onPress={() => changeLanguage(language)}
            >
              <Text >
                Switch to {language}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
