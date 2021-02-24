package com.anavis.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "accettazioni")
public class AccettazioneEmergenza {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String citta;
	private String gruppoSanguigno;

	
	@Column(name = "codiceEmergenza")
	private String codiceEmergenza;


	// Costruttori
	
	
	
	public AccettazioneEmergenza() {
		
	}


	public AccettazioneEmergenza(long id, String citta, String gruppoSanguigno) {
		super();
		this.id = id;
		this.citta = citta;
		this.gruppoSanguigno = gruppoSanguigno;
	}
	


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getCitta() {
		return citta;
	}


	public void setCitta(String citta) {
		this.citta = citta;
	}


	public String getGruppoSanguigno() {
		return gruppoSanguigno;
	}


	public void setGruppoSanguigno(String gruppoSanguigno) {
		this.gruppoSanguigno = gruppoSanguigno;
	}


	public String getCodiceEmergenza() {
		return codiceEmergenza;
	}


	public void setCodiceEmergenza(String codiceEmergenza) {
		this.codiceEmergenza = codiceEmergenza;
	}

}
