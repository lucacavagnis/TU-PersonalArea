
import React from "react";
import Table from "@/Components/Table/Table";
import ActionColumn from "@/Components/Table/ActionColumn";
import {InstantSubmitInput} from "@/Components/Inputs/InstantSubmitInput";
import ProductImage from "@/Components/Authenticated/Product/ProductImage";

export const LotsTable=({protocol})=>{

    const protocol_lots=protocol.protocol_lots
    function excerpt(str, nwords) {
        var words = str.split(' ');
        words.splice(nwords, words.length-1);
        return words.join(' ') +
            (words.length !== str.split(' ').length ? '...' : '');
    }

    return(
        <Table route={route('admin.protocols.show',protocol.id)} className="pb-4">
            {protocol_lots && protocol_lots.length>0?
                <>
                    <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header name="id" >
                                Image
                            </Table.Header>
                            <Table.Header name="date" >
                                Sku
                            </Table.Header>
                            <Table.Header name="qty_available" >
                                Name
                            </Table.Header>
                            <Table.Header name="qty_available">
                                Qt.à disponibile
                            </Table.Header>
                            <Table.Header name="qty_total" >
                                Qt.à totale
                            </Table.Header>
                            <Table.Header>
                                Prezzo originale
                            </Table.Header>
                            <Table.Header>
                                Prezzo riservato
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.HeaderRow>
                        <Table.Body>
                            {protocol_lots.map((pl)=>{
                                const l=pl.lot
                                return(
                                    <Table.Row key={pl.id}>
                                        <Table.Field>
                                            <ProductImage  name={l.product.image} className="w-12 h-12"/>
                                        </Table.Field>
                                        <Table.Field>
                                            {l.product.sku}
                                        </Table.Field>
                                        <Table.Field>
                                            {excerpt(l.product.name,5)}
                                        </Table.Field>
                                        <Table.Field>
                                            {l.qty_available}
                                        </Table.Field>
                                        <Table.Field>
                                            {l.qty_total}
                                        </Table.Field>
                                        <Table.Field>
                                            <InstantSubmitInput step={0.01} min={0} defaultValue={pl.original_price} type="number" id={pl.id} name="original_price" routeName="admin.protocol_lots.update" />
                                        </Table.Field>
                                        <Table.Field>
                                            <InstantSubmitInput step={0.01} min={0} defaultValue={pl.price} type="number" id={pl.id} name="price" routeName="admin.protocol_lots.update" />
                                        </Table.Field>
                                        <ActionColumn del={route('admin.protocol_lots.destroy',pl.id)}/>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table.Inner>
                </>:
                <p className="py-4">Nessun lotto presente</p>}
        </Table>
    )

}

