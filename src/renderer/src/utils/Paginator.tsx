import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const PaginadoOverlay = () => { 
    return (
        <Pagination aria-label="Page navigation" className="pagination-primary cdx-pagination">
            <PaginationItem className='cdx-pagination-item cdx-pagination-item-start'>
                <PaginationLink href="#"> Previous </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cdx-pagination-item">
                <PaginationLink href="#"> 1 </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cdx-pagination-item">
                <PaginationLink href="#"> 2 </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cdx-pagination-item">
                <PaginationLink href="#"> 3 </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cdx-pagination-item cdx-pagination-item-end">
                <PaginationLink href="#"> Next </PaginationLink>
            </PaginationItem>
        </Pagination>
    )
};