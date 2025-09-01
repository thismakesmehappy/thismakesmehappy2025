import {Image} from 'react-bootstrap';
import {listOfAccentColors, memojis} from 'src/helpers/constants.ts';
import {asset} from 'src/helpers/assetPath.ts';

interface RandomMemojiProps {
    id?: string,
    className?: string,
    backgroundColor?: boolean,
    backgroundColorVariant?: "light" | "dark" | "faded" | ""
}

const RandomMemoji = ({
                          id,
                          className,
                          backgroundColor = false,
                          backgroundColorVariant = ""
                      }: RandomMemojiProps) => {
    const memojiSelect = Math.floor(Math.random() * (memojis.length));
    const memoji = memojis[memojiSelect];
    const colorSelect = Math.floor(Math.random() * (listOfAccentColors.length));
    const color = listOfAccentColors[colorSelect];
    const variant = backgroundColorVariant == "" ? "" : `-${backgroundColorVariant}`;
    const bgColor = backgroundColor ? `bg-${color}${variant}` : ''
    return (
        <>
            <div id={id} className={className}>
                <Image src={asset(`me/${memoji}`)}
                       className={`rounded-circle ${bgColor}`} alt="" />
            </div>
        </>
    );
};

export default RandomMemoji;