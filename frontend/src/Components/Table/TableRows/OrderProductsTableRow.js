import React from 'react'
import {map} from 'lodash'
import TableBtn from '../../Buttons/TableBtn'
import TableInput from '../../Inputs/TableInput'
import {IoAdd, IoRemove} from 'react-icons/io5'
export const OrderProductsTableRow = ({
    data,
    currency,
    increment,
    decrement,
    handleDelete,
    handleCountProduct,
}) => {
    return (
        <>
            {map(data, (item, index) => (
                <tr key={index} className='tr'>
                    <td className='td py-2'>{1 + index}</td>
                    <td className='td text-center'>{item?.product?.code}</td>
                    <td className='td text-left'>{item?.product?.name}</td>
                    <td className='td text-end'>
                        {item?.total?.toLocaleString('ru-Ru')}{' '}
                        {item?.unit?.name}
                    </td>
                    <td className='td text-end'>
                        {currency === 'UZS'
                            ? item?.unitpriceuzs?.toLocaleString('ru-Ru')
                            : item?.unitprice?.toLocaleString('ru-Ru')}{' '}
                        {currency}
                    </td>
                    <td className='text-left td'>
                        <span className={'flex gap-[0.6rem] items-center'}>
                            <button
                                onClick={() => decrement(item?.product?._id)}
                                className={
                                    'rounded-[4px] duration-100 bg-error-500 hover:bg-error-600 p-[0.2rem] text-base text-white-900 active:scale-95'
                                }
                            >
                                <IoRemove size={'0.875rem'} />
                            </button>
                            <TableInput
                                value={item?.pieces.recived}
                                onChange={(e) =>
                                    handleCountProduct(e, item?.product?._id)
                                }
                                type={'number'}
                            />
                            <button
                                onClick={() => increment(item?.product?._id)}
                                className={
                                    'rounded-[4px] duration-100 bg-success-500 hover:bg-success-600 p-[0.2rem] text-base text-white-900 active:scale-95'
                                }
                            >
                                <IoAdd size={'0.875rem'} />
                            </button>
                        </span>
                    </td>
                    <td className='td text-end'>
                        {currency === 'UZS'
                            ? item?.totalpriceuzs?.toLocaleString('ru-Ru')
                            : item?.totalprice?.toLocaleString('ru-Ru')}{' '}
                        {currency}
                    </td>
                    <td className='td'>
                        <div className='flex items-center justify-center gap-[5px]'>
                            <TableBtn
                                onClick={() => handleDelete(index)}
                                type={'delete'}
                                bgcolor={'bg-error-500'}
                            />
                        </div>
                    </td>
                </tr>
            ))}
        </>
    )
}
