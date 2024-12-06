import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView className="flex bg-white items-center justify-center h-full w-full">
      <Text className="text-center">Home Page</Text>
    </SafeAreaView>
  );
};

export default Home;
