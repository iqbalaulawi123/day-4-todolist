/**
 * Referensi : https://react-hook-form.com/
 * Form validasi https://react-hook-form.com/api/useform/register/
 */

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function FormDaftar(){
    const [formData,formDataSet] = useState({
        nama : "",
        email : "",
        nohp : "",
        background : "",
        kelas : "",
        file_commit : "",
        feedback : "",
    })
    const { register, handleSubmit, watch, formState: { errors,touchedFields }, reset } = useForm();

    const resetFormHandler = () =>{
        reset();
    } 
    const submitFormHandler = val =>{
        formDataSet({
            nama : val.nama_lengkap,
            email : val.email,
            nohp : val.nohp,
            background : val.background,
            kelas : val.kelas,
            file_commit : val.file_commit,
            feedback : val.feedback,
        })
        alert("Form kamu sudah berhasil disubmit "+JSON.stringify(formData));
    } 
    return (
        <>
            <div className="title-page mb-3 mt-3 fw-bold">
                Form Pendaftaran
            </div>
            <div className="subtitle-page mb-3 text-muted">
                Pendaftaran Peserta Coding Bootcamp
            </div>
            <div className="card mx-auto my-auto bg-white shadow-sm rounded my-2">
                <div className="card-body">
                <form onSubmit={handleSubmit(submitFormHandler)}>
                    <div className="form-group mb-3">
                        <label >Nama Lengkap</label>
                        <input {...register("nama_lengkap",{
                                    required : {value:true, message:"Nama Lengkap harus diisi"},
                                    minLength: { value: 3, message: "Minimal Nama adalah 3 karakter" },
                                    pattern: { value: /[A-Za-z]{3}/ , message: "Nama lengkap harus berupa huruf" }
                                })
                            }
                            name="nama_lengkap" type="text" className="form-control" placeholder="Nama Lengkap"
                        />
                        <small className="form-text text-danger">
                            {touchedFields?.nama_lengkap && errors?.nama_lengkap && errors.nama_lengkap?.message}
                        </small>
                    </div>
                    <div className="form-group mb-3">
                        <label >Email</label>
                        <input {...register("email",{
                                    required : {value:true, message:"Email harus diisi"},
                                    pattern: { value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                                            message: "Email tidak valid" }
                                })
                            } 
                            name="email" type="text" className="form-control" placeholder="email@example.com"
                        />
                        <small className="form-text text-danger">
                            {touchedFields?.email && errors?.email && errors.email?.message}
                        </small>
                    </div>
                    <div className="form-group mb-3">
                        <label >Nomor Handphone</label>
                        <input {...register("nohp",{
                                    required : {value:true, message:"Nomor HP harus diisi"},
                                    minLength: { value: 8, message: "Minimal Nomor HP adalah 8 karakter" },
                                    pattern: { value: /^[0-9\b]+$/ , 
                                                message: "Nomor HP tidak sesuai" }
                                })
                            } name="nohp" type="text" className="form-control" placeholder="08XXXXXX"/>
                        <small className="form-text text-danger">
                            {touchedFields?.nohp && errors?.nohp && errors.nohp?.message}
                        </small>
                    </div>
                    <div className="form-group mb-3">
                        <label >Latar Belakang Pendidikan</label>
                        <br/>
                        <div className="form-check form-check-inline">
                            <input {...register("background")} name="background" className="form-check-input" type="radio" value="it"/>
                            <label className="form-check-label" htmlFor="inlineRadio1">IT</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("background")} name="background" className="form-check-input" type="radio" value="non-it"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">non - IT</label>
                        </div>
                        <br/>
                        <small className="form-text text-danger">
                            {touchedFields?.background && errors?.background && errors.background?.message}
                        </small>
                    </div>
                    <div className="form-group mb-3">
                        <label>Kelas yang dipilih</label>
                        <select className="form-control" name="kelas" {...register("kelas",{
                                    required : {value:true, message:"Kelas harus diisi"},
                                })
                            }
                            >
                            <option value="">-- Pilih Kelas --</option>
                            <option value="FS">Full Stack Developer</option>
                            <option value="QA">Quality Assurance</option>
                            <option value="BE">Backend Developer</option>
                            <option value="FE">Frontend Developer</option>
                            <option value="UIUX">UI/UX Designer</option>
                        </select>
                        <small className="form-text text-danger">
                            {touchedFields?.background && errors?.background && errors.background?.message}
                        </small>
                    </div>
                    <div className="form-group mb-3">
                        <label >Upload surat kesungguhan</label><br/>
                        <input {...register("file_commit",{
                                    required : {value:true, message:"Kelas harus diisi"},
                                })
                            } name="file_commit" type="file" className="form-control-file"  />
                        <br/>
                        <small className="form-text text-danger">
                            {touchedFields?.file_commit && errors?.file_commit && errors.file_commit?.message}
                        </small>
                    </div>
                    <div className="form-group mb-3">
                        <label >Harapan untuk kelas ini</label>
                        <textarea {...register("feedback")} name="feedback" className="form-control" rows="3"></textarea>
                    </div>
                    <div className="form-group row">
                        <button value="submit" className="btn btn-success col-5 mx-1" >Submit</button>
                        <button className="btn btn-danger col-5 mx-1" onClick={handleSubmit(resetFormHandler)}>
                        Reset
                        </button>
                    </div>
                        
                    
                </form>
                </div>
            </div>
        </>
    )
}