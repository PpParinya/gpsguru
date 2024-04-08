import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: '1. กรมขนส่งทางบกบังคับให้รถประเภทใดบ้างที่ต้องติด GPS?',
    children: [
      {name: 'รถ 2 ประเภท คือ'}, 
      {name: '- รถโดยสารสาธารณะ เช่น รถบัส, รถบัส 2 ชั้น, รถตู้โดยสาร, รถ Taxi'}, 
      {name: '- รถบรรทุกขนาดใหญ่ เช่น รถบรรทุก 10 ล้อขึ้นไป, รถลากจูง'}
    ],
  },
  {
    name: '2. กรมขนส่งทางบกมีหลักเกณฑ์ในการบังคับใช้ให้รถโดยสารสาธารณะและรถบรรทุกติด GPS อย่างไรบ้าง?',
    children: [
      {
        name: '2.1. รถโดยสารสาธารณะ',
        children: [
          {name: '- รถโดยสารทุกประเภท ป้ายแดง (จดทะเบียนใหม่) ให้เริ่มบังคับใช้จะต้องติดตั้ง GPS ตั้งแต่ 25 มกราคม 2559 เป็นต้นไป'}, 
          {name: '- รถโดยสารทุกประเภท ป้ายเก่า (จดทะเบียนก่อนปี 59) จะต้องติดตั้ง GPS ให้เสร็จสิ้นภายในรอบภาษีปี 2560'},
          {name: '- รถโดยสารสองชั้น ป้ายเก่า (จดทะเบียนก่อนปี 56) จะต้องติดตั้ง GPS ให้เสร็จสิ้นภายในรอบภาษีปี 2559'},
          {name: '- รถ Taxi ใหม่ ป้ายแดง รอประกาศจากกระทรวง ซึ่งจะบังคับให้ติดตั้งทันทีที่กฎกระทรวงมีผลใช้บังคับ'},
          {name: '- รถโดยสารทุกประเภท ป้ายเก่า (จดทะเบียนก่อนปี 59) ที่ได้ติดตั้ง GPS ไว้แล้ว และเป็นรุ่นที่ไม่ผ่านการรับรองจากกรมขนส่งทางบกแต่สามารถเชื่อมโยงข้อมูลกับกรมขนส่งได้ ยังสามารถใช้ GPS รุ่นเดิมได้ถึงปี 2562'},
        ],
      },
      {
        name: '2.2. รถบรรทุกขนาดใหญ่',
        children: [
          {name: '- รถบรรทุก 10 ล้อและรถลากจูง ป้ายแดง (จดทะเบียนใหม่) ให้เริ่มบังคับใช้ จะต้องติดตั้ง GPS ตั้งแต่ 25 มกราคม 2559 เป็นต้นไป'}, 
          {name: '- รถลากจูง ป้ายเก่า (จดทะเบียนก่อนปี 59) จะต้องติดตั้ง GPS ให้เสร็จสิ้นภายในรอบภาษีปี 2560'},
          {name: '- รถบรรทุก 10 ล้อ สาธารณะ ป้ายเก่า (จดทะเบียนก่อนปี 59) จะต้องติดตั้ง GPS ให้เสร็จสิ้นภายในรอบภาษีปี 2561'},
          {name: '- รถบรรทุก 10 ล้อ ส่วนบุคคล ป้ายเก่า (จดทะเบียนก่อนปี 59) จะต้องติดตั้ง GPS ให้เสร็จสิ้นภายในรอบภาษีปี 2562'},
          {name: '- รถบรรทุก 10 ล้อและรถลากจูง ป้ายเก่า (จดทะเบียนก่อนปี 59) ที่ได้ติดตั้ง GPS ไว้แล้ว และเป็นรุ่นที่ไม่ผ่านการรับรองจากกรมขนส่งทางบกแต่สามารถเชื่อมโยงข้อมูลกับกรมขนส่งได้ ยังสามารถใช้ GPS รุ่นเดิมได้ถึงปี 2562'},
        ],
      },
    ],
  },
  {
    name: '3. ถ้ารถอยู่ในเงื่อนไขบังคับใช้ GPS แต่ไม่ได้ทำการติดตั้ง GPS ตามเงื่อนไข จะส่งผลกระทบอย่างไรบ้าง?',
    children: [
      {name: '- ในกรณีเป็นรถใหม่จะไม่สามารถไปจดทะเบียนได้ เนื่องจากเจ้าหน้าที่ตรวจสภาพรถ จะตรวจสอบการติดตั้ง GPS ในรถของท่านด้วย ดังนั้นจะต้องดำเนินการติดตั้ง GPS กับบริษัทที่ได้รับการรับรองจากกรมขนส่งทางบกก่อน แล้วจึงนำรถพร้อมใบรับรองการติดตั้งไปยื่นขอจดทะเบียนรถใหม่ได้'}, 
      {name: '- ในกรณีเป็นรถเก่า เมื่อทะเบียนรถหมดอายุ จะไม่สามารถต่อทะเบียนได้ เนื่องจากเจ้าหน้าที่ตรวจสภาพรถ จะตรวจสอบการติดตั้ง GPS ในรถด้วย เช่นกัน'},
    ],
  },

];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-question',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
}
