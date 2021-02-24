package com.anavis.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "prenotazioni")
public class Prenotazione {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String codiceFiscale;
	private String data;
	private String citta;
	
	@Column(name = "codice")
	private String codice;
	

	// Costruttori
	
	public Prenotazione() {
		
	}
	
	public Prenotazione(Long id, String codice, String data, String citta, String codiceFiscale) {
		super();
		this.id = id;
		this.codice = codice;
		this.data = data;
		this.citta = citta;
		this.codiceFiscale = codiceFiscale;
	}
	
	// Getters e setters
	

	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getCodice() {
		return codice;
	}
	
	public void setCodice(String codice) {
		this.codice = codice;
	}

	public String getCodiceFiscale() {
		return codiceFiscale;
	}

	public void setCodiceFiscale(String codiceFiscale) {
		this.codiceFiscale = codiceFiscale;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getCitta() {
		return citta;
	}

	public void setCitta(String citta) {
		this.citta = citta;
	}
	

}
