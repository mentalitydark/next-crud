interface TitleProps {
    children: any;
}

export default function Title(props: TitleProps) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            <hr className="border border-gray-400"/>
        </div>
    )
};
