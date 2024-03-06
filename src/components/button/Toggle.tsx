import { FaCloudSun } from "react-icons/fa";

interface BaseToggleProps {
    OnToggle?: (isToggled: boolean) => void;
}
export default function BaseToggle({ OnToggle }: BaseToggleProps) {
    return (
        // animated toggle switch
        <label
            htmlFor="AcceptConditions"
            className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-primary"
        >
            <input type="checkbox" id="AcceptConditions" className="peer sr-only"
                onClick={(e: React.MouseEvent<HTMLInputElement>) => {
                    if (OnToggle) {
                        OnToggle(e.currentTarget.checked);
                    }
                }}
            />

            <span
                className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
            ></span>
        </label>
    )
}

export function DarkModeToggle({ OnToggle }: BaseToggleProps) {
    return (
        <div className="flex items-center space-x-2">
            <FaCloudSun className={`text-2xl text-yellow-400 dark:text-black transition-colors duration-300`} />
            <BaseToggle OnToggle={
                (isDark) => {
                    if (isDark) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                }
            } />
        </div>
    )
}