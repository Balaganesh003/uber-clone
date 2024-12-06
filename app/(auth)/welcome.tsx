import { router } from 'expo-router';
import { useRef } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { onboardingSlides } from '../../constants';

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <TouchableOpacity
          onPress={() => router.push('/(auth)/sign-in')}
          className="absolute right-5 top-5 z-10"
        >
          <Text className="text-primary-500 font-JakartaMedium text-base">Skip</Text>
        </TouchableOpacity>

        <Swiper
          ref={swiperRef}
          loop={false}
          dotStyle={{
            width: 32,
            height: 4,
            borderRadius: 2,
            backgroundColor: '#e2e8f0',
            marginBottom: 32,
          }}
          activeDotStyle={{
            width: 32,
            height: 4,
            borderRadius: 2,
            backgroundColor: '#0286ff',
            marginBottom: 32,
          }}
        >
          {onboardingSlides.map((slide, index) => (
            <View key={index} className="flex-1 px-6">
              <View className="flex-[0.6] items-center justify-center">
                <Image source={slide.image} className="w-full h-[300]" resizeMode="contain" />
              </View>
              <View className="flex-[0.4] items-center justify-start gap-y-4">
                <Text className="text-3xl font-JakartaBold text-center text-gray-900">
                  {slide.title}
                </Text>
                <Text className="text-base font-JakartaMedium text-center text-gray-600 px-4">
                  {slide.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>

        <View className="px-6 pb-8">
          <TouchableOpacity
            onPress={() => router.push('/(auth)/sign-in')}
            className="w-full bg-primary-500 py-4 rounded-xl"
          >
            <Text className="text-white font-JakartaBold text-center text-lg">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
