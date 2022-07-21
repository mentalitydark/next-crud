interface InputProps {
    text: string;
    value: any;
    type?: 'text' | 'number';
    readOnly?: boolean;
    onChange?: (value: any) => void;
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col my-4">
            <label>
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                onChange={ e => props.onChange?.(e.target.value)}
                className={`
                    border border-gray-400 rounded px-4 py-2 mt-2
                    focus:outline-none focus:bg-blue-50
                `}
            />
        </div>
    )
};
