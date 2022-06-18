import React, {FC} from 'react';

// open closed principle
// Компонент может масштабироватся большого размера.
// Программные объекты должны быть открыты для расширения, но закрыты для модификации.
// Таким образом, правильный способ запустить расширяемый компонент использовать композицию с самого начала.
// Таким образом, компонент Input будет закрыт для модификации и открыт для расширения:

// <InputContainer ...props>
//      <InputLabel ...props />
//      <InputLeftAddon ...props />
//      <InputControl ...props />
//      <InputRightAddon ...props />
// </InputContainer>

interface InputProps {
    inputRef: React.RefObject<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >;

    className?: string;
    containerClassName?: string;
    formGroupClassName?: string;
    type?: "text" | "search" | "password" | "email" | "textarea" | "select";
    textareaRows?: number;
    name?: string;
    value: string;
    isTouched: boolean;
    onChange: React.ChangeEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >;
    onInput: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onClearClick: React.MouseEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur: React.FocusEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >;
    onInvalid: React.FormEventHandler<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >;
    placeholder?: string;
    id: string;
    maxLength?: number;
    hasClearButton?: boolean;
    label?: React.ReactNode;
    labelStyle?: "onTop" | "onLeft";
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
    addonLeftClassName?: string;
    addonRightClassName?: string;
    helpText?: React.ReactNode;
    isShortInput?: boolean;
    isLoading?: boolean;
}

const Input: FC<InputProps> = ({
                                   className,
                                   containerClassName,
                                   formGroupClassName,
                                   type = "text",
                                   name,
                                   value = "",
                                   placeholder,
                                   id,
                                   onChange,
                                   onInput,
                                   onInvalid,
                                   onBlur,
                                   maxLength,
                                   hasClearButton,
                                   label,
                                   isTouched,
                                   onClearClick,
                                   addonLeft,
                                   addonRight,
                                   addonLeftClassName,
                                   addonRightClassName,
                                   inputRef,
                                   helpText,
                                   labelStyle,
                                   textareaRows,
                                   isShortInput,
                                   isLoading,
                                   ...validationProps
                               }) => {
    return <div><input />...</div>;
};

export default Input;

