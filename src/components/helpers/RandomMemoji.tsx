import {Image} from "react-bootstrap";
import HandleAssets from "../../helpers/HandleAssets.ts";
import {listOfAccentColors, memojis} from "../../helpers/constants.ts";

interface RandomMemojiProps {
    id?: string,
    className?: string,
    backgroundColor?: boolean,
}

export const RandomMemoji = ({id, className, backgroundColor = false}: RandomMemojiProps) => {
    const memojiSelect = Math.floor(Math.random() * (memojis.length));
    const memoji = memojis[memojiSelect];
    const colorSelect = Math.floor(Math.random() * (listOfAccentColors.length));
    const color = listOfAccentColors[colorSelect];
    const bgColor = backgroundColor ? `bg-${color}}` : ''
    return (
        <>
            <div id={id} className={className}>
                <Image src={HandleAssets.getAsset(`me/${memoji}`)}
                       className={`rounded-circle ${bgColor}`} />
            </div>
        </>
    );
};