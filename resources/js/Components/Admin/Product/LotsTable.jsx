
import React from "react";
import Table from "@/Components/Table/Table";
import ActionColumn from "@/Components/Table/ActionColumn";
import {Format_date, Format_date_input} from "@/Helpers/String";
import {InstantSubmitInput} from "@/Components/Inputs/InstantSubmitInput";

export const LotsTable=(props)=>{
    console.log(props)

    let lots=props.lots.data
    let product=props.product

    function excerpt(str, nwords) {
        var words = str.split(' ');
        words.splice(nwords, words.length-1);
        return words.join(' ') +
            (words.length !== str.split(' ').length ? '...' : '');
    }

    return(
        <Table route={route('admin.products.show',product.id)}>
            <Table.Search />
            {lots && lots.length>0?
                <>
                    <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header name="id" sortable={true}>
                                ID
                            </Table.Header>
                            <Table.Header name="date" sortable={true}>
                                Data
                            </Table.Header>
                            <Table.Header name="qty_total" sortable={true}>
                                Qt.à totale
                            </Table.Header>
                            <Table.Header name="qty_available" sortable={true}>
                                Qt.à disponibile
                            </Table.Header>
                            <Table.Header>
                                Protocollo
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.HeaderRow>
                        <Table.Body>
                            {lots.map((l)=>{
                                return(
                                    <Table.Row key={l.id}>
                                        <Table.Field>
                                            {l.id}                                        </Table.Field>                            <Table.Field>
                                            <InstantSubmitInput defaultValue={Format_date_input(l.date)} type="date" id={l.id} name="date" routeName="admin.lots.update" />
                                        </Table.Field>
                                        <Table.Field>
                                            <InstantSubmitInput min={0} defaultValue={l.qty_total} type="number" id={l.id} name="qty_total" routeName="admin.lots.update" />
                                        </Table.Field>
                                        <Table.Field>
                                            <InstantSubmitInput min={0} max={l.qty_total} defaultValue={l.qty_available} type="number" id={l.id} name="qty_available" routeName="admin.lots.update" />
                                        </Table.Field>
                                        <Table.Field>
                                            {l.protocol_lot?l.protocol_lot.protocol.referral:undefined}
                                        </Table.Field>
                                        <ActionColumn del={route('admin.lots.destroy',l.id)}/>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table.Inner>
                    <Table.Pagination paginated={props.lots} />
                </>:
                <p>Nessun lotto presente</p>}
        </Table>
    )

}

