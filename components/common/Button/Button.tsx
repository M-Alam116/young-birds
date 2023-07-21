import classes from './button.module.css'

interface Props {
    text: string;
    style: string;
}
export default function Button({ text, style }: Props) {
    return (
        <button className={style}>{text}</button>
    )
}
