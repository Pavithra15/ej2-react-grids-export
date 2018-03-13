/* tslint:disable*/
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GridComponent, Sort, Group, Search, Toolbar, Resize, ExcelExport, ColumnChooser, Reorder,
    Inject
} from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import './App.css';

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

export default class App extends React.Component<{}, {}> {
    public toolbarOptions: any = ['ExcelExport', 'PdfExport', 'CsvExport','ColumnChooser'];
    public columns: Object[] = [{ field: 'OrderID' }, { field: 'CustomerID' }];
    public grid: any;
    public toolbarClick(args: ClickEventArgs): void {
        switch (args.item.text) {
            case 'Excel Export':
                this.grid.excelExport();
                break;
            default: break;
        }
    }
    public componentDidMount() {
        ReactDOM.render( <GridComponent dataSource={data} ref={grid => this.grid = grid} columns={this.columns} toolbar={this.toolbarOptions} allowResizing={true}
            allowGrouping={true}
            allowSorting={true}
            allowMultiSorting={true}
            allowReordering={true}
            showColumnChooser={true}
            allowExcelExport={true} toolbarClick={this.toolbarClick.bind(this)}>
            <Inject services={[Sort, Group, Search, Toolbar, Resize, ExcelExport, ColumnChooser, Reorder]} />
        </GridComponent>,document.getElementById('mygrid'));
    }
    render() {
        return (
           <div id='mygrid'></div>

        );
    }
}
ReactDOM.render(<App />, document.getElementById('grid'));