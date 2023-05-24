import React from "react";
import Table from "@/Components/Table/Table";
import ActionColumn from "@/Components/Table/ActionColumn";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";

export const ProductsTable=(props)=>{
    let products=props.products.data
    function excerpt(str, nwords) {
        var words = str.split(' ');
        words.splice(nwords, words.length-1);
        return words.join(' ') +
            (words.length !== str.split(' ').length ? '...' : '');
    }

    return(
                    <Table route={route('admin.products.index')}>
                        <Table.Search />
                        {products && products.length>0?
                            <>
                        <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header className="mr-4">
                                Immagine
                            </Table.Header>
                            <Table.Header name="company_id" sortable={true} >
                                Azienda
                            </Table.Header>
                            <Table.Header name="sku" sortable={true}>
                                SKU
                            </Table.Header>
                            <Table.Header name="name" sortable={true}>
                                Nome
                            </Table.Header>
                            <Table.Header name="desc" sortable={true}>
                                Descrizione
                            </Table.Header>
                            <Table.Header name="category_id" sortable={true} >
                                Catgeoria
                            </Table.Header>
                            <Table.Header name="subcategory_id" sortable={true}>
                                Sottocategoria
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.HeaderRow>
                        <Table.Body>
                            {products.map((p)=>{
                                return(
                                    <Table.Row key={p.id}>
                                        <Table.Field>
                                            <ProductImage name={p.image} className="h-8 w-8" />
                                        </Table.Field>
                                        <Table.Field>
                                            {p.company.name}
                                        </Table.Field>
                                        <Table.Field>
                                            {p.sku}
                                        </Table.Field>
                                        <Table.Field>
                                            {excerpt(p.name,5)}
                                        </Table.Field>
                                        <Table.Field>
                                            {excerpt(p.desc,5)}
                                        </Table.Field>
                                        <Table.Field>
                                            {p.category.name}
                                        </Table.Field>
                                        <Table.Field>
                                            {p.subcategory.name}
                                        </Table.Field>
                                        <ActionColumn read={route('admin.products.show',p.id)} update={route('admin.products.edit',p.id)} del={route('admin.products.destroy',p.id)}/>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                        </Table.Inner>
                        <Table.Pagination paginated={props.products} />
                                </>:
                            <p>Nessun prodotto presente</p>}
                    </Table>
    )
}

