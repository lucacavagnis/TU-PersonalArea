
import React from "react";
import Table from "@/Components/Table/Table";
import CrudActionColumn from "@/Components/Table/CrudActionColumn";
import {InstantSubmitInput} from "@/Components/Inputs/InstantSubmitInput";

export const CategoriesTable=({sub=false,...props})=>{
    let categories=props.categories.data

    const routePrefix=sub?'admin.subcategories.':'admin.categories.'


    return(
        <Table route={route(routePrefix+'index')}>
            <Table.Search />
            {categories && categories.length>0?
                <>
                    <Table.Inner>
                        <Table.HeaderRow>
                            <Table.Header name="id" sortable={true}>
                                ID
                            </Table.Header>
                            <Table.Header name="name" sortable={true}>
                                Nome
                            </Table.Header>
                            <Table.Header>
                            </Table.Header>
                        </Table.HeaderRow>
                        <Table.Body>
                            {categories.map((c)=>{
                                return(
                                    <Table.Row key={c.id}>
                                        <Table.Field>
                                            {c.id}
                                        </Table.Field>
                                        <Table.Field>
                                            <InstantSubmitInput id={c.id} routeName={routePrefix+"update"} name="name" defaultValue={c.name} />
                                        </Table.Field>
                                        <CrudActionColumn del={route(routePrefix+'destroy',c.id)}/>

                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table.Inner>
                    <Table.Pagination paginated={props.categories} />
                </>:
                <p>Nessuna categoria presente</p>}
        </Table>
    )
}

