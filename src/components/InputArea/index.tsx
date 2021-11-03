import { useState } from 'react';
import { categories } from '../../data/catagories';
import { Item } from '../../types/Items';
import * as C from './styles';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);

    let categoriesKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {

        let errors: string[] = [];

        if (isNaN(new Date(dateField).getTime())) {
            errors.push('Data inválida!');
        }

        if (!categoriesKeys.includes(categoryField)) {
            errors.push("Categoria inválida!");
        }

        if (titleField === '') {
            errors.push("Titulo vazio");
        }

        if (valueField <= 0) {
            errors.push('Valor inválido!');
        }

        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            onAdd({
                data: new Date(dateField),
                category: categoryField,
                title: titleField,
                values: valueField
            });
            clearFields();
        }
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }



    return (
        <C.Container>
            <C.InputLabel>
                <C.InputTitle>Data</C.InputTitle>
                <C.Input type="date" value={dateField} onChange={(event) => setDateField(event.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Categoria</C.InputTitle>
                <C.Select value={categoryField} onChange={(event) => setCategoryField(event.target.value)}>
                    <>
                        <option></option>
                        {
                            categoriesKeys.map((key, index) => (
                                <option key={index} value={key}>{categories[key].title}</option>
                            ))
                        }
                    </>
                </C.Select>
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Titulo</C.InputTitle>
                <C.Input type="text" value={titleField} onChange={(event) => setTitleField(event.target.value)} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>Valor</C.InputTitle>
                <C.Input type="number" value={valueField} onChange={(event) => setValueField(parseFloat(event.target.value))} />
            </C.InputLabel>

            <C.InputLabel>
                <C.InputTitle>&nbsp;</C.InputTitle>
                <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    );
}