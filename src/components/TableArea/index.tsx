import * as C from './styles';
import { Item } from '../../types/Items';
import { TableItem } from '../TableItem';


//sempre que recebemos um prop em um componente, temos que criar um type para ele
type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadeColum width={100}>Data</C.TableHeadeColum>
                    <C.TableHeadeColum width={130}>Categoria</C.TableHeadeColum>
                    <C.TableHeadeColum>Título</C.TableHeadeColum>
                    <C.TableHeadeColum width={150}>Valor</C.TableHeadeColum>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    )
}

