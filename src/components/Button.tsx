interface ButtonProps {
    color?: 'green' | 'blue' | 'gray';
    className?: string;
    children: any;
    onClick?: () => void;
}

export default function Button(props: ButtonProps) {
    const color = props.color ?? 'gray'

    return (
        <button onClick={props.onClick} className={`
            text-white bg-${color}-600 hover:bg-${color}-500
            px-4 py-2 rounded
            ${props.className}
        `}>
            {props.children}
        </button>
    )
};
