type Props = {
    children: string;
    tags: Array<string>;
    testEvt(): void;
}
const Highlight = ({ children, tags, testEvt }: Props) => {
    if (!tags?.length) return <p className="item">{ children }</p>;
    else {
        const matches = [...children.matchAll(new RegExp(tags.join("|"), "ig"))];
        const startText = children.slice(0, matches[0]?.index);
        return (
            <p className="item" onClick={ (event) => testEvt(event) }>
                {startText}
                {matches.map((match, i) => {
                    const startIndex: number = match.index;
                    const currentText = match[0];
                    const endIndex = startIndex + currentText.length;
                    const nextIndex = matches[i + 1]?.index;
                    const untilNextText = children.slice(endIndex, nextIndex);
                    return (
                    <span key={i}>
                        <mark>{currentText}</mark>
                        {untilNextText}
                    </span>
                    );
                })}
            </p>
        );
    }
}

export default Highlight;