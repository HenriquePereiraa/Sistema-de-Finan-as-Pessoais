import * as C from './styles';
import { Item } from '../../types/Items';
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/catagories';

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColum>{formatDate(item.data)}</C.TableColum>
            <C.TableColum>
                <C.Catagory color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Catagory>
            </C.TableColum>
            <C.TableColum>{item.title}</C.TableColum>
            <C.TableColum>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.values}
                </C.Value>
            </C.TableColum>
        </C.TableLine>
    );
}