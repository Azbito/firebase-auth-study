import AppRoutes from "./Routes"
import { AuthGoogleProvider } from "./contexts/authGoogle"

export const App = () => {
 return (
   <AuthGoogleProvider>

   <AppRoutes />
   </AuthGoogleProvider>
 )
}