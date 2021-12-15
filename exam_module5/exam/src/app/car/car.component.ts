import {Component, OnInit} from '@angular/core';
import {Car} from "../model/car";
import {HouseCar} from "../model/house-car";
import {Country} from "../model/country";
import {CarService} from "../service/car.service";
import {HouseCarService} from "../service/house-car.service";
import {CountryService} from "../service/country.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carList: Car[] = [];
  houseCarList: HouseCar[] = [];
  countryList: Country[] = [];
  page = 1;

  carForm: FormGroup = new FormGroup({
      id: new FormControl(),
      typeCar: new FormControl('', [Validators.required]),
      houseCarName: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/((090)|(093)|(097))(\d){7}$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-z]+[a-zA-Z0-9]+@[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+\\.*[a-zA-Z0-9])*/)]),
      gioDi: new FormControl('', [Validators.required, Validators.pattern(/(([0-1][0-9])|(2[0-4])):(([0-5][0-9]))/)]),
      gioDen: new FormControl('', [Validators.required, Validators.pattern(/(([0-1][0-9])|(2[0-4])):(([0-5][0-9]))/)])
    }, this.validateTime
  );

  constructor(
    private carService: CarService,
    private houseCarService: HouseCarService,
    private countryService: CountryService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => {
      this.carList = value;
    });
    this.houseCarService.getAll().subscribe(value => {
      this.houseCarList = value;
    });
    this.countryService.getAll().subscribe(value => {
      this.countryList = value;
    });
  }

  compareHouseCar(c1: HouseCar, c2: HouseCar): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCountry(c1: Country, c2: Country): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  idEdit: number;
  idDel: number;

  trackIdEdit(value: string) {
    this.idEdit = Number(value);
    this.bindingEdit();
  }

  trackIdDel(value: string) {
    this.idDel = Number(value);
  }

  deleteCar() {
    this.carService.delete(this.idDel).subscribe(
      next => {
        this.router.navigateByUrl("/student").then(e => {
            if (e) {
              this.router.navigateByUrl("/")
            }
            alert("Đã xóa thành công !");
          }
        );
      });
  }
  carEdit: Car;
  updateCar() {
    this.carEdit = this.carForm.value;
    this.carEdit.id = this.idEdit;
    console.log(this.carEdit.gioDi);
    console.log(this.carEdit.gioDen);
    this.carService.update(this.carEdit).subscribe(next => {

      this.ngOnInit();
      alert("Đã sửa thông tin thành công !");
    })

  }

  car: Car;

  bindingEdit() {
    for (let i = 0; i < this.carList.length; i++) {
      if (this.carList[i].id === this.idEdit) {
        this.car = this.carList[i];
      }
    }
    this.carForm.setValue(this.car);
  }

  get id() {
    return this.carForm.get('id');
  }

  get typeCar() {
    return this.carForm.get('typeCar');
  }

  get houseCarName() {
    return this.carForm.get('houseCarName');
  }

  get diemDi() {
    return this.carForm.get('diemDi');
  }

  get diemDen() {
    return this.carForm.get('diemDen');
  }

  get phone() {
    return this.carForm.get('phone');
  }

  get email() {
    return this.carForm.get('email');
  }

  get gioDi() {
    return this.carForm.get('gioDi');
  }

  get gioDen() {
    return this.carForm.get('gioDen');
  }

  validateTime(time: AbstractControl) {
    return isValidTime(time.value.gioDi, time.value.gioDen) ? null : {errTime: true};
  }
}

function isValidTime(gioDi: string, gioDen: string) {
  let arrGioDi = gioDi.split(':');
  let arrGioDen = gioDen.split(':');
  if (Number(arrGioDi[0]) < 5) {
    return false;
  }
  if (Number(arrGioDi[0]) > 23) {
    return false;
  }
  if (Number(arrGioDen[0]) < 5) {
    return false;
  }
  if (Number(arrGioDen[0]) > 23) {
    return false;
  }
  return true;
}
