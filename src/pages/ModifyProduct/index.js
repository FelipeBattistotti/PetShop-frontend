import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import smallPetShopLogoImg from '../../assets/small_pet_shop_logo.svg';

export default function ModifyProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock_quantity, setStockQuantity] = useState('');

    const userId = localStorage.getItem('userId');
    const productId = localStorage.getItem('productId');

    const history = useHistory();

    const { addToast } = useToasts();

    useEffect(() => {
        loadProduct();
    }, [productId]);

    async function loadProduct () {
        const response = await api.get(`product/${productId}`, {
            headers: {
                Authorization: userId,
            }
        });

        setName(response.data.name);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setPrice(response.data.price);
        setStockQuantity(response.data.stock_quantity);
    }

    async function handleModifyProduct (e) {
        e.preventDefault();

        const id = productId; // it is necessary to send the ID to the PUT request

        const data = {
            id,
            name,
            description,
            category,
            price,
            stock_quantity,
        };

        try {
           await api.put('product',
               data,
               {
                   headers: {
                       Authorization: userId,
               }
           });

           addToast('Produto alterado com sucesso!', { appearance: 'success' });

           history.push('/products'); // back to the Products page

        } catch (err) {
            addToast('Erro ao alterar produto, tente novamente.', { appearance: 'error' });
        }
    }

    function handleProducts () {
        history.push('/products'); // back to the Products page
    }

    return (
        <div className="modify-product-container">
            <section className="form">
                <header>
                    <img  src={smallPetShopLogoImg} alt="smallPetShopLogo" className="img" />
                    <button onClick={handleProducts} type="button" title="Voltar">
                        <FiChevronLeft size={30} />
                    </button>
                </header>

                <div>
                    <p className="title">Alterar Produto</p>
                </div>

                <form onSubmit={handleModifyProduct}>
                    <input 
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Categoria"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    />
                    <input 
                        placeholder="Preço"
                        value={price}
                        type="number"
                        onChange={e => setPrice(e.target.value)}
                    />
                    <input 
                        placeholder="Quantidade Estoque"
                        value={stock_quantity}
                        type="number"
                        onChange={e => setStockQuantity(e.target.value)}
                    />
                    <button id="modifyProductButton" className="button" type="submit">Alterar</button>
                </form>
            </section>
        </div>
    );
}
