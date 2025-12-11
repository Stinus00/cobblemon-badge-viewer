import {copyToClipboard} from "~/utils/copyToClipboard";
import {useEffect, useState} from "react";

type Badge = {
    badgeId: number;
    badgeName: string;
    image: string;
    type: string;
};

type Props = {
    badge?: Badge;
    selectedId: number;
};

const BadgeSelector = ({ badge, selectedId }: Props) => {
    const [copied, setCopied] = useState(false)
    const [text, setText] = useState("Text")

    useEffect(() => {
        setText(`/give @p minecraft:popped_chorus_fruit[minecraft:custom_model_data=${selectedId}, minecraft:item_name="\\"` + badge?.badgeName + `\\""]`)
    }, [selectedId]);

    const handleCopy = async () => {
        const ok = await copyToClipboard(text);
        if (ok) {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    }

    return (
        <div className="relative border rounded p-3">
            <p className="break-words">{text}</p>
            <button
                onClick={handleCopy}
                className="absolute bg-white dark:bg-black relative border rounded p-3 px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-800"
                style={{cursor:"pointer", width:"100%", marginTop:"10px"}}
            >
                {copied ? "Copied" : "Copy"}
            </button>
        </div>

    );
};

export default BadgeSelector;
