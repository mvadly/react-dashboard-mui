import { expiredStorage } from "./expiredStorage"

export const handleLogout = () => {
    expiredStorage.clear()
    window.location.href="/"

}