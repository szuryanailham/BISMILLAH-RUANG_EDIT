import { FiCheckCircle } from "react-icons/fi";
import { RequirementToolsProps } from "@/types/RequirementTools";
function RequirtmentTools({ items }: RequirementToolsProps) {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 text-Sixth_Color ">
            <h1 className="text-3xl font-semibold text-center text-Second_Color mb-7 w-full max-w-xl">
                Requirement Tools
            </h1>
            <ul className="space-y-3 max-w-2xl">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <FiCheckCircle className="text-green-500 w-5 h-5 mt-1" />
                        <span>{item.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RequirtmentTools;
