import React from "react";
import Table from "@/Components/Table/Table";
import CrudActionColumn from "@/Components/Table/CrudActionColumn";
import Status from "@/Components/Authenticated/Order/Status";

export const OrdersTable=(props)=>{
    let orders=props.orders.data
    function excerpt(str, nwords) {
        var words = str.split(' ');
        words.splice(nwords, words.length-1);
        return words.join(' ') +
            (words.length !== str.split(' ').length ? '...' : '');
    }

    return(
                    <Table route={route('admin.orders.index')}>
                        <Table.Search />
                        {orders && orders.length>0?
                            <>
                        <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header name="id" sortable={true} className="w-[60px]">
                                ID
                            </Table.Header>
                            <Table.Header name="date" sortable={true} className="w-[170px]">
                                Data
                            </Table.Header>
                            <Table.Header name="status" sortable={true} className="w-[150px]">
                                Status
                            </Table.Header>
                            <Table.Header name="referral" sortable={true}>
                                Referente
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.HeaderRow>
                        <Table.Body>
                            {orders.map((o)=>{
                                return(
                                    <Table.Row key={o.id} className="group">
                                        <Table.Field>
                                            {o.id}
                                        </Table.Field>
                                        <Table.Field>
                                            {o.date}
                                        </Table.Field>
                                        <Table.Field>
                                            <Status status={o.status}/>
                                        </Table.Field>
                                        <Table.Field>
                                            <p>{o.user.name}</p>
                                            <a className="text-sm text-indigo-700 lowercase" href={"mailto:"+o.user.email}>{o.user.email}</a>
                                        </Table.Field>
                                        <CrudActionColumn read={route('admin.orders.show',o.id)} update={route('admin.orders.edit',o.id)} del={route('admin.orders.destroy',o.id)}/>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                        </Table.Inner>
                        <div className="flex w-full justify-between items-center">
                            {/*<Button type="link" href={route('admin.orders.create')}>Crea nuovo</Button>*/}
                            <Table.Pagination paginated={props.orders} />
                        </div>
                                </>:<>
                                <p>Nessun ordine presente</p>
                                {/*<Button type="link" href={route('admin.orders.create')}>Crea nuovo</Button>*/}
                            </>
                            }
                    </Table>
    )
}

