package com.anavis.springboot.model;


import java.util.Hashtable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;



import javax.persistence.GenerationType;

@Entity
@Table(name = "date")
public class Calendario {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String data;
	private String citta;
	
	@Column(name = "codice")
	private String codice; // Questo è il codice della sede associata ad una data
		
	// Costruttori
	
	public Calendario() {
		
	}
	
	public Calendario(String codice, String data, String citta) {
		super();
		this.codice = codice;
		this.data = data;
		this.citta = citta;
		//hashtable_calendario.put(codice, data);
	}
	

	// Getters e setters
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getCodice() {
		return codice;
	}

	public void setCodice(String codice) {
		this.codice = codice;
	}


	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}
	
}
