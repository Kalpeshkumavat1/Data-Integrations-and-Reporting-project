const { createObjectCsvWriter }=require('csv-writer')
const PDFDocument=require('pdfkit')
const fs=require('fs')

class ReportService{
    static async generateCsvReport(data,fields,filename){
        const csvWriter=createObjectCsvWriter({
            path:filename,
            header:fields.map(field=>({id:field,title:field}))
        })
        await csvWriter.writeRecords(data);
        return filename
    }

    static async generatePdfReport(data,title,filename){
        const doc=new PDFDocument();
        doc.pipe(fs.createWriteStream(filename));

        doc.fontSize(20).text(title,{align:'center'})
        doc.moveDown();
        Object.entries(data).forEach(([key,value])=>{
            doc.fontSize(12).text(`${key}:${value}`)
        });
        doc.end();
        return filename;
    }
}
module.exports=ReportService;