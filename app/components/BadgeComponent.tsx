type Badge = {
    badgeId: number;
    badgeName: string;
    image: string;
    type: string;
    author?: string;
};

type Props = {
    badge?: Badge;
};

const BadgeComponent = ({ badge }: Props) => {
    if (!badge) return <div>Please select an item.</div>;

    let imageLink = `${badge.type}_badges/${badge.image}`

    return (
        <div className="flex flex-col items-center space-x-4"
             style={{marginTop: "1rem"}}>
            <img src={imageLink}
                 className="w-64 h-64"
                 style={{imageRendering: "pixelated"}}/>
            <span className="text-lg font-medium"
                  style={{marginTop: "1rem", marginRight: 0}}>{badge.badgeName}</span>
            {badge.type === "custom" ? <span className="text-sm font-medium">
                By: {badge.author}</span> : <span/>}
        </div>
    );
};

export default BadgeComponent;