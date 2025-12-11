type Badge = {
    badgeId: number;
    badgeName: string;
};

type Props = {
    badges: Badge[];
    selectedId: number;
    onSelect: (badgeId: number) => void;
};

const BadgeSelector = ({ badges, selectedId, onSelect }: Props) => {
    return (
        <select
            value={selectedId}
            className="w-full border rounded px-3 py-2"
            onChange={(e) => onSelect(Number(e.target.value))}>
            {badges.map((badge) => (
                <option key={badge.badgeId} value={badge.badgeId}>
                    {badge.badgeName}
                </option>
            ))}
        </select>
    );
};

export default BadgeSelector;
