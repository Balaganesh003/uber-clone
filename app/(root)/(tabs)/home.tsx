import { SignedIn, SignedOut, useUser, useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Page() {
  const { user } = useUser()
  const { signOut } = useAuth()

  return (
    <SafeAreaView className='flex-1 p-4 bg-white'>
      <SignedIn>
        <Text className='text-xl mb-2'>
          Hello {user?.emailAddresses[0].emailAddress}
        </Text>
        <Text onPress={() => signOut()} className='text-blue-600 mb-2'>
          Sign out
        </Text>
      </SignedIn>
      <SignedOut>
        <Link href='/(auth)/sign-in'>
          <Text className='text-blue-600 mb-2'>Sign in</Text>
        </Link>
        <Link href='/(auth)/sign-up'>
          <Text className={`text-blue-600 mb-2`}>Sign up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  )
}
