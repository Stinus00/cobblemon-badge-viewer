import { useState } from "react";
import data from "../data/badges.json";
import { getItemById } from "~/utils/getItemById";
import BadgeSelector from "../components/BadgeSelector";
import BadgeComponent from "../components/BadgeComponent";
import CommandLine from "~/components/CommandLine";

type Badge = {
    badgeId: number;
    badgeName: string;
    image: string;
    type: string;
    author?: string;
};

const CobblemonPage = () => {
    const [selectedId, setSelectedId] = useState<number>(8030001);

    const selectedItem = getItemById<Badge>(data, selectedId);

    return (
        <div className="max-w-md mx-auto p-4 space-y-6">
            <BadgeComponent badge={selectedItem}/>

            <BadgeSelector
                badges={data}
                selectedId={selectedId}
                onSelect={setSelectedId}
            />

            <CommandLine badge={selectedItem} selectedId={selectedId}/>
        </div>
    );
};

export default CobblemonPage;
