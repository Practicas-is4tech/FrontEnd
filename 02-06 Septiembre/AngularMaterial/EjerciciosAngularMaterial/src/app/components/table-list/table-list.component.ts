import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  displayedColumns: string[] = ['id', 'nombre', 'edad'];
  dataSource = new MatTableDataSource<PersonasList>(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.sort.sortChange.subscribe((sortState: Sort) => {
      this.announceSortChange(sortState);
    });

    this.dataSource.filterPredicate = (data: PersonasList, filter: string) => {
      return data.nombre.toLowerCase().includes(filter);
    };
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}

export interface PersonasList {
  nombre: string;
  id: number;
  edad: number;
}

const ELEMENT_DATA: PersonasList[] = [
  { id: 1, nombre: 'Uriel Sanchez', edad: 18 },
  { id: 2, nombre: 'Anderson Rogel', edad: 18 },
  { id: 3, nombre: 'Elmer Santos', edad: 20 },
  { id: 4, nombre: 'Esteban Arreaga', edad: 40 },
  { id: 5, nombre: 'Kenneth Velasquez', edad: 14 },
  { id: 6, nombre: 'Dennys Abad', edad: 25 },
  { id: 7, nombre: 'Diego Siney', edad: 22 },
  { id: 8, nombre: 'Kaled Soc', edad: 26 },
  { id: 9, nombre: 'Mishell Marroquin', edad: 18 },
  { id: 10, nombre: 'Alejandra Sanchez', edad: 19 },
  { id: 11, nombre: 'Jazmine Rogel', edad: 22 },
  { id: 12, nombre: 'Manuel Sanchez', edad: 24 },
];
