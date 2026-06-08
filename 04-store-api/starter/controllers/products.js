const Product=require('../models/product')
const getallProductStatic=async(req,res)=>{
    const products=await Product.find({})
    res.status(200).json({products,nbHits:products.length})
}

const getallProducts=async(req,res)=>{
    console.log(req.query);
    const {featured,company,name,sort,field,numericalFilters}=req.query
    const queryObject={}
    if(featured){
        queryObject.featured=featured==='true'?true:false
    }
    if(company){
        queryObject.company=company
    }
    if(name){
        queryObject.name={$regex:name,$options:'i'}
    }
    if(numericalFilters){
        const operatorMap={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte'
        }
        const regEx=/\b(>|>=|=|<|<=)\b/g
        let filters=numericalFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`)
        console.log(filters);
        const options=['price','rating']
        filters=filters.split(',').forEach(item=>{
            const [field,operator,value]=item.split('-')
            if(options.includes(field)){
                queryObject[field]={[operator]:Number(value)}
            }
        })
    }

    
    let result= Product.find(queryObject )
    if(sort){
        const sortList=sort.split(',').join(' ')
        console.log(sortList);
        result=result.sort(sortList)
    }

    if(field){
        const fieldList=field.split(',').join(' ')
        console.log(fieldList);
        result=result.select(fieldList)
    }
        
    // if(limit){
    //     result=result.limit(Number(limit))
    // }
    // if(skip){
    //     result=result.skip(Number(skip))
    // }

    const page=Number(req.query.page)||1
    const limit=Number(req.query.limit)||10
    const skip=(page-1)*limit
    result=result.skip(skip).limit(limit)


    const products=await result
   // console.log(products);
    res.status(200).json({products,nbHits:products.length})
}

module.exports={getallProductStatic,getallProducts}