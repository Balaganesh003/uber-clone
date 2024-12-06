import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    return (
        <SafeAreaView className="flex bg-white items-center justify-center">
            <Text className="text-2xl font-bold text-black">Home Page</Text>
        </SafeAreaView>
    );
};

export default Home;
