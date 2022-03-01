interface Props {
    title: string;
    show: boolean;
    body: string | JSX.Element | JSX.Element[];
    buttons: {
        accent: boolean;
        dismiss: boolean;
        label: string;
        action: () => void;
    }[];
}

export default function Modal(props: Props) {
    return (
        <div>
            <div />

            <div>
                
            </div>
        </div>
    )
}
