type Props = {
  country: string
  tags: Array<string>
  selectOption(event: React.MouseEvent<HTMLParagraphElement>): void
}

const Highlight = ({ country, tags, selectOption }: Props) => {
  const matches = [...country.matchAll(new RegExp(tags.join("|"), "ig"))]
  const startText = country.slice(0, matches[0]?.index)
  return (
    <p className="item" onClick={ selectOption }>
      {startText}
      {matches.map((match, i) => {
        const startIndex = match.index
        const currentText = match[0]
        const endIndex = startIndex! + currentText.length
        const nextIndex = matches[i + 1]?.index
        const untilNextText = country.slice(endIndex, nextIndex)
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

export default Highlight