import { useEffect, useState } from "react"

export const useForm = ( valorInicial = {} ) => {

    const [formState, setFormState] = useState( valorInicial )

    useEffect(() => {
        setFormState( valorInicial )
    }, [ valorInicial ])

    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    const handleResetForm = ( valorPorDefecto ) => {
        setFormState( valorPorDefecto )
    }
    
    return {
        ...formState,
        formState,
        handleInputChange,
        handleResetForm
    }
}
